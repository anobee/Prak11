document.getElementById("formTugas").addEventListener("submit", function(event) {
    event.preventDefault();

    const jurusan = document.getElementById("jurusan").value;
    const tanggalInput = document.getElementById("tanggal").value;
    const hasil = document.getElementById("hasil");

    if (jurusan === "" || tanggalInput === "") {
        hasil.innerHTML = "<p style='color:red;'>Harap isi semua data terlebih dahulu.</p>";
        return;
    }

    // Format tanggal ke format lokal Indonesia (1 Juni 2025)
    const tanggalFormatted = new Date(tanggalInput).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    hasil.innerHTML = `
        <p><strong>Jurusan yang dipilih:</strong> ${jurusan}</p>
        <p><strong>Tanggal yang dipilih:</strong> ${tanggalFormatted}</p>
    `;

    // Optional: reset form setelah submit
    document.getElementById("formTugas").reset();
});