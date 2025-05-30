import { unlink } from 'fs/promises';
import { NextResponse } from 'next/server';
import { connect } from '@/helpers/db'; // Import your MySQL connection helper

export async function DELETE(request, {params}) {
  try {
    const filename = params.filename;

    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    const filePath = `./public/uploads/${filename}`;

    // Connect to the database
    const connection = await connect();

    // Remove the file from the file system
    await unlink(filePath);

    // Delete the record from the database
    const query = 'DELETE FROM images WHERE filename = ?';
    await connection.execute(query, [filename]);

    await connection.end();

    return NextResponse.json({ success: true, message: 'File and record deleted successfully' });
  } catch (error) {
    console.error('Error deleting file:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}