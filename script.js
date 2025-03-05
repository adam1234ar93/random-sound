// Daftar file suara (pastikan file MP3 ada di folder yang sama)
const sounds = [
    "JikoChristysound1.mp3",
    "JikoFreyasound2.mp3",
    "JikoBaruAmanda.mp3"
];

let currentAudio = null; // Variabel untuk menyimpan audio yang sedang dimainkan

function playSound() {
    // Jika ada audio yang sedang dimainkan, hentikan dulu
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset waktu ke awal
    }

    // Pilih suara secara acak
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    // Buat objek audio baru
    currentAudio = new Audio(randomSound);

    // Mainkan suara
    currentAudio.play();
}
