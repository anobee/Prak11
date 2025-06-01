function tampilkanData() {
  // Ambil nilai dari input
  const nama = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const jurusan = document.getElementById("jurusan").value;
  const birthdate = document.getElementById("birthdate").value;

  // Validasi sederhana
  if (!nama || !gender || !jurusan || !birthdate) {
    alert("Harap lengkapi semua data terlebih dahulu!");
    return;
  }

  // Format hasil output
  const hasilHTML = `
    <h3>Data Mahasiswa:</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Jurusan:</strong> ${jurusan}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
  `;

  // Tampilkan hasil di elemen dengan id="hasil"
  document.getElementById("hasil").innerHTML = hasilHTML;
}