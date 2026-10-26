const modules = [
  { icon:'✧', title:'Konsep Dasar Generative AI', short:'Kenali pengertian, cara kerja, manfaat, dan batasan Generative AI di bidang pendidikan.', duration:'5 menit', intro:'Generative AI adalah teknologi kecerdasan buatan yang dapat menghasilkan konten baru berdasarkan pola dari data yang dipelajari.', blocks:[
    {heading:'Apa itu Generative AI?', paragraphs:['Generative AI (AI generatif) merupakan jenis AI yang menghasilkan konten seperti teks, gambar, audio, kode, dan video berdasarkan instruksi pengguna (prompt). Contoh penggunaannya adalah membuat draf modul, ilustrasi pembelajaran, atau latihan soal.','Berbeda dengan sistem yang hanya mengelompokkan data, model generatif menghasilkan respons baru berdasarkan pola yang dipelajari selama pelatihan. Hasilnya tidak selalu benar dan perlu diperiksa.']},
    {heading:'Cara kerja singkat', bullets:['Pengguna memberikan prompt atau instruksi yang jelas.','Model memproses instruksi menggunakan pola dari data pelatihan dan konteks yang tersedia.','Model menghasilkan jawaban atau konten yang dapat disunting pengguna.','Pengguna menilai akurasi, kesesuaian usia, dan kualitas hasil.']},
    {heading:'Manfaat dan keterbatasan', bullets:['Manfaat: membantu ide awal, membuat variasi penjelasan, menghemat waktu penyusunan draf, dan mendukung diferensiasi materi.','Keterbatasan: informasi bisa keliru (halusinasi), bias, tidak selalu sesuai kurikulum, dan berisiko terhadap privasi bila data sensitif dimasukkan.']}
  ], tip:'Kunci utama: perlakukan output AI sebagai draf yang harus diverifikasi, bukan sumber kebenaran otomatis.'},
  { icon:'▤', title:'Analisis Kebutuhan & Perancangan', short:'Pelajari cara menentukan masalah, kebutuhan pengguna, dan rancangan solusi pembelajaran.', duration:'6 menit', intro:'Media yang baik berawal dari kebutuhan peserta didik, bukan hanya dari teknologi yang sedang populer.', blocks:[
    {heading:'Analisis kebutuhan', bullets:['Tentukan siapa penggunanya: jenjang pendidikan, pengetahuan awal, dan akses perangkat/internet.','Identifikasi hambatan belajar, misalnya materi terlalu panjang atau kurang contoh visual.','Rumuskan tujuan pembelajaran yang terukur, misalnya “peserta didik dapat menyebutkan tiga manfaat AI generatif”.','Pertimbangkan aksesibilitas: kontras warna, ukuran huruf, navigasi keyboard, dan bahasa yang mudah dipahami.']},
    {heading:'Merancang solusi', paragraphs:['Pilih bentuk media yang sesuai kebutuhan: infografis untuk ringkasan, video untuk demonstrasi, atau website interaktif untuk eksplorasi dan evaluasi. Buat alur sederhana dari pengantar, materi, contoh, latihan, hingga umpan balik.']},
    {heading:'Contoh prompt perancangan', paragraphs:['“Bantu susun kerangka media pembelajaran tentang keamanan data digital untuk siswa SMK. Sertakan tiga tujuan pembelajaran, lima subtopik ringkas, dua aktivitas, dan lima soal evaluasi. Gunakan bahasa Indonesia sederhana.”']}
  ],tip:'Tujuan pembelajaran, karakteristik pengguna, dan aksesibilitas sebaiknya ditetapkan sebelum membuat desain visual.'},
  { icon:'⌘', title:'Mengembangkan Media dengan AI', short:'Gunakan prompt efektif dan proses revisi untuk membangun materi visual atau interaktif.', duration:'7 menit', intro:'Pengembangan media dengan bantuan AI membutuhkan instruksi yang jelas, evaluasi hasil, dan penyuntingan manusia.', blocks:[
    {heading:'Teknik membuat prompt', bullets:['Berikan peran atau konteks: “Bertindak sebagai penyusun materi pembelajaran SMK”.','Tentukan topik, tujuan, target pembaca, serta batasan panjang materi.','Tentukan format output: tabel, poin ringkasan, naskah video, atau soal pilihan ganda.','Minta contoh konkret dan kriteria penilaian; lalu revisi berdasarkan hasil.']},
    {heading:'Alur pembuatan media', bullets:['Buat outline dan struktur materi.','Gunakan AI untuk menyusun draf teks atau ide ilustrasi.','Periksa fakta menggunakan buku ajar atau sumber tepercaya.','Susun antarmuka, interaksi, dan navigasi media.','Uji pada pengguna sasaran dan perbaiki bagian yang membingungkan.']},
    {heading:'Contoh penerapan', paragraphs:['Dalam proyek website EduGen AI ini, AI membantu perancangan struktur materi, ide tampilan, contoh latihan, dan draf kode HTML, CSS, serta JavaScript. Seluruh materi dan fungsi tetap perlu ditinjau dan diuji sebelum dipakai dalam pembelajaran.']}
  ],tip:'Prompt yang spesifik biasanya memudahkan revisi; kualitas tetap ditentukan oleh pemeriksaan dan pertimbangan pendidik.'},
  { icon:'◈', title:'Implementasi & Pengelolaan Media', short:'Pahami cara menerapkan media dalam pembelajaran serta menjaga agar mudah diakses dan dikelola.', duration:'5 menit', intro:'Media perlu digunakan dalam konteks pembelajaran nyata dan dipelihara supaya tetap relevan.', blocks:[
    {heading:'Tahap implementasi', bullets:['Periksa media pada ponsel dan laptop dengan ukuran layar berbeda.','Pastikan tombol, tautan, materi, dan kuis berjalan dengan benar.','Berikan instruksi penggunaan yang mudah dipahami.','Gunakan media saat pembuka, eksplorasi, latihan, atau penutup pembelajaran sesuai kebutuhan.']},
    {heading:'Pengelolaan berkelanjutan', bullets:['Simpan versi cadangan file dan catat perubahan materi.','Perbarui informasi dan tautan jika ada perubahan.','Hindari memasukkan data pribadi siswa ke layanan AI tanpa dasar izin dan perlindungan yang memadai.','Siapkan alternatif akses, misalnya ringkasan yang bisa dicetak saat koneksi terbatas.']},
    {heading:'Contoh penggunaan di kelas', paragraphs:['Guru membagikan website, peserta didik membaca modul secara mandiri, menandai progres, kemudian menjawab kuis. Hasil kuis dipakai sebagai refleksi, bukan satu-satunya ukuran capaian belajar.']}
  ],tip:'Dalam versi website ini, progres belajar disimpan melalui localStorage pada browser, bukan ke server atau akun pengguna.'},
  { icon:'◎', title:'Evaluasi & Optimalisasi Media', short:'Kenali metode penilaian kualitas materi, pengalaman pengguna, dan efektivitas pembelajaran.', duration:'6 menit', intro:'Evaluasi membantu memastikan media bukan hanya menarik, tetapi juga akurat, bermanfaat, dan mudah digunakan.', blocks:[
    {heading:'Aspek evaluasi', bullets:['Akurasi isi: sesuai tujuan dan sumber tepercaya, tanpa informasi menyesatkan.','Kegunaan: navigasi sederhana, teks terbaca, dan instruksi jelas.','Aksesibilitas: kontras memadai, responsif, dapat digunakan dengan keyboard.','Efektivitas: latihan dan aktivitas mendukung pemahaman materi.']},
    {heading:'Metode evaluasi sederhana', bullets:['Minta beberapa pengguna mencoba website dan catat kendala yang mereka temui.','Berikan kuis singkat sebelum/sesudah belajar jika sesuai kebutuhan.','Kumpulkan umpan balik tentang materi yang membingungkan.','Perbaiki isi, urutan, ukuran teks, serta interaksi berdasarkan temuan.']},
    {heading:'Optimalisasi', paragraphs:['Ringkas paragraf yang terlalu panjang, perjelas visual, hindari animasi yang mengganggu, dan uji ulang perubahan. Untuk AI generatif, tinjau ulang hasil setelah setiap revisi materi.']}
  ],tip:'Evaluasi yang baik menggabungkan pengamatan pengguna, kualitas konten, dan capaian tujuan belajar.'},
  { icon:'⚑', title:'Etika & Tanggung Jawab AI', short:'Gunakan teknologi AI dengan memperhatikan privasi, hak cipta, bias, dan kejujuran akademik.', duration:'5 menit', intro:'AI dapat mendukung pendidikan jika digunakan secara transparan, aman, adil, dan tetap diawasi manusia.', blocks:[
    {heading:'Prinsip penggunaan bertanggung jawab', bullets:['Transparansi: jelaskan saat konten disusun dengan bantuan AI jika relevan.','Privasi: jangan mengunggah identitas atau data sensitif tanpa izin dan kebutuhan yang sah.','Hak cipta: hormati lisensi dan periksa izin penggunaan gambar, teks, musik, dan aset lain.','Keadilan: waspadai bias atau representasi yang merugikan kelompok tertentu.','Verifikasi: cocokkan informasi penting dengan rujukan yang dapat dipertanggungjawabkan.']},
    {heading:'Apa yang sebaiknya dilakukan?', paragraphs:['Posisikan AI sebagai asisten, bukan pengganti penilaian kritis. Pendidik menetapkan tujuan, menilai akurasi, menyesuaikan materi, dan bertanggung jawab atas keputusan pembelajaran.']},
    {heading:'Contoh praktik baik', paragraphs:['Saat memakai AI untuk membuat soal, periksa apakah kunci jawaban masuk akal, tingkat kesulitan sesuai peserta didik, dan tidak ada informasi yang keliru. Hindari menyalin output tanpa memahami isinya.']}
  ],tip:'Sebelum membagikan media, lakukan pemeriksaan fakta, privasi, atribusi aset, dan kesesuaian dengan peserta didik.'}
];

const questions=[
 {q:'Apa fungsi utama Generative AI?',a:['Hanya menyimpan data dalam tabel','Menghasilkan konten baru berdasarkan pola yang dipelajari','Menggantikan seluruh tugas pendidik','Menjamin semua informasi selalu benar'],correct:1,why:'Generative AI dapat menghasilkan teks, gambar, atau konten lain; hasilnya tetap perlu diverifikasi.'},
 {q:'Langkah awal yang tepat sebelum merancang media pembelajaran adalah …',a:['Memilih warna paling cerah','Menyebarkan materi tanpa uji coba','Menganalisis pengguna dan tujuan pembelajaran','Membuat kuis sesulit mungkin'],correct:2,why:'Analisis kebutuhan membantu memastikan media sesuai tujuan, kemampuan, dan kondisi pengguna.'},
 {q:'Prompt yang cenderung lebih efektif adalah prompt yang …',a:['Jelas tentang tujuan, konteks, audiens, dan format','Tidak memberikan konteks sama sekali','Selalu hanya satu kata','Tidak perlu direvisi'],correct:0,why:'Instruksi spesifik memberi arah yang jelas dan mempermudah evaluasi hasil AI.'},
 {q:'Mengapa keluaran AI perlu diperiksa kembali?',a:['Karena AI tidak pernah membuat teks','Karena semua media harus dicetak','Karena AI hanya bekerja tanpa internet','Karena AI dapat menghasilkan kekeliruan dan bias'],correct:3,why:'AI dapat berhalusinasi atau menghasilkan bias, sehingga verifikasi isi tetap diperlukan.'},
 {q:'Media yang sesuai untuk ringkasan poin-poin visual adalah …',a:['Database kosong','Infografis','Tabel tanpa judul','Layar tanpa konten'],correct:1,why:'Infografis menyajikan informasi inti dengan dukungan elemen visual agar mudah dipindai.'},
 {q:'Berikut yang termasuk pengujian media sebelum dipakai adalah …',a:['Mengabaikan tampilan ponsel','Membatasi akses tanpa alasan','Memeriksa responsivitas dan fungsi tombol','Menghapus seluruh instruksi penggunaan'],correct:2,why:'Pengujian layar, navigasi, serta fungsi interaktif membantu pengguna mengakses materi.'},
 {q:'Apa kegunaan evaluasi media pembelajaran?',a:['Mengetahui kekurangan dan memperbaiki kualitas','Menentukan harga laptop pengguna','Membuat AI selalu sempurna','Menghindari umpan balik pengguna'],correct:0,why:'Evaluasi dipakai untuk menilai akurasi, kegunaan, aksesibilitas, dan efektivitas.'},
 {q:'Praktik yang tepat saat menggunakan data siswa adalah …',a:['Mengunggah semua informasi pribadi ke AI','Menyebarkan nilai tanpa izin','Mengabaikan keamanan akun','Menjaga privasi dan hanya menggunakan data yang diperlukan'],correct:3,why:'Penggunaan data perlu mempertimbangkan izin, kebutuhan, keamanan, dan aturan yang berlaku.'},
 {q:'Dalam pembelajaran, peran ideal AI adalah …',a:['Penentu tunggal nilai tanpa tinjauan','Asisten bagi pendidik dan peserta didik','Pengganti semua sumber belajar','Jaminan semua sumber benar'],correct:1,why:'AI dapat mempercepat proses, sementara pendidik dan peserta didik tetap memegang kendali dan berpikir kritis.'},
 {q:'Jika siswa kesulitan memahami satu modul, perbaikan terbaik adalah …',a:['Menambah istilah rumit tanpa penjelasan','Menghapus semua contoh','Menyederhanakan bahasa serta menambahkan contoh relevan','Mengabaikan keluhan pengguna'],correct:2,why:'Revisi berdasarkan kebutuhan pengguna adalah inti optimalisasi media pembelajaran.'}
];

const $ = (id) => document.getElementById(id);
const storageKeys = { progress: 'edugen-progress-v2', theme: 'edugen-theme-v2', quiz: 'edugen-quiz-v1' };
let activeModule = 0;
let activeFilter = 'all';
const savedProgress = safeRead(storageKeys.progress, []);
let completed = new Set((Array.isArray(savedProgress) ? savedProgress : []).filter((n) => Number.isInteger(n) && n >= 0 && n < modules.length));
let quizIndex = 0;
let selectedAnswers = [];
let quizLocked = false;
let toastTimer;

function safeRead(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}
function safeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { return false; }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function renderModules() {
  const query = $('searchInput').value.trim().toLocaleLowerCase('id');
  const found = modules.map((module, index) => ({ ...module, index })).filter((module) => {
    const matchesQuery = `${module.title} ${module.short} ${module.intro} ${module.blocks.map((block) => `${block.heading} ${(block.paragraphs || []).join(' ')} ${(block.bullets || []).join(' ')}`).join(' ')}`.toLocaleLowerCase('id').includes(query);
    const matchesFilter = activeFilter === 'all' || (activeFilter === 'done' ? completed.has(module.index) : !completed.has(module.index));
    return matchesQuery && matchesFilter;
  });

  $('moduleGrid').innerHTML = found.map((module) => `
    <article class="module-card">
      <div class="module-top"><span class="module-icon" aria-hidden="true">${escapeHTML(module.icon)}</span><span class="module-index">MODUL ${String(module.index + 1).padStart(2, '0')}</span></div>
      <h3>${escapeHTML(module.title)}</h3>
      <p>${escapeHTML(module.short)}</p>
      <div class="module-bottom"><button type="button" class="module-open" data-open="${module.index}" aria-label="Baca ${escapeHTML(module.title)}">Baca Materi <span aria-hidden="true">→</span></button>
      ${completed.has(module.index) ? '<span class="module-completed">✓ Selesai</span>' : `<span class="module-meta">◷ ${escapeHTML(module.duration)}</span>`}</div>
    </article>`).join('');

  $('emptyState').hidden = found.length !== 0;
  $('moduleCount').textContent = `${found.length} dari ${modules.length} modul ditampilkan`;
  $('allCount').textContent = String(modules.length);
  $('doneCount').textContent = String(completed.size);
  updateProgress();
}
function updateProgress() {
  const count = completed.size;
  const percent = Math.round((count / modules.length) * 100);
  $('progressLabel').textContent = `${count}/${modules.length} modul`;
  $('progressPercent').textContent = `${percent}% selesai`;
  $('moduleProgress').style.width = `${percent}%`;
  $('moduleProgress').setAttribute('aria-valuenow', String(percent));
}
function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('[data-filter]').forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderModules();
}
function openModule(index) {
  if (!Number.isInteger(index) || index < 0 || index >= modules.length) return;
  activeModule = index;
  const module = modules[index];
  $('dialogLabel').textContent = `MODUL ${String(index + 1).padStart(2, '0')} / ${String(modules.length).padStart(2, '0')}`;
  $('dialogIcon').textContent = module.icon;
  $('dialogTitle').textContent = module.title;
  $('dialogIntro').textContent = module.intro;
  $('dialogBody').innerHTML = module.blocks.map((block) => `
    <section class="lesson-block"><h3>${escapeHTML(block.heading)}</h3>
      ${(block.paragraphs || []).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}
      ${block.bullets ? `<ul>${block.bullets.map((bullet) => `<li>${escapeHTML(bullet)}</li>`).join('')}</ul>` : ''}
    </section>`).join('') + `<div class="lesson-tip"><strong>💡 Poin penting:</strong> ${escapeHTML(module.tip)}</div>`;
  $('prevModule').disabled = index === 0;
  $('nextModule').disabled = index === modules.length - 1;
  updateCompleteButton();
  const dialog = $('lessonDialog');
  if (!dialog.open) dialog.showModal();
  $('dialogScroll').scrollTop = 0;
}
function updateCompleteButton() {
  const isComplete = completed.has(activeModule);
  $('completeModule').textContent = isComplete ? '✓ Batalkan Selesai' : '✓ Tandai Selesai';
  $('completeModule').setAttribute('aria-pressed', String(isComplete));
}
function toggleComplete() {
  if (completed.has(activeModule)) completed.delete(activeModule);
  else completed.add(activeModule);
  const saved = safeStore(storageKeys.progress, [...completed]);
  updateCompleteButton();
  renderModules();
  showToast(completed.has(activeModule) ? 'Modul ditandai selesai.' : 'Status selesai modul dibatalkan.');
  if (!saved) showToast('Progres berubah, tetapi browser tidak mengizinkan penyimpanan lokal.');
}
function resetProgress() {
  if (!completed.size) { showToast('Belum ada progres yang perlu direset.'); return; }
  const shouldReset = window.confirm('Hapus semua status modul selesai?');
  if (!shouldReset) return;
  completed.clear();
  const stored = safeStore(storageKeys.progress, []);
  renderModules();
  updateCompleteButton();
  showToast(stored ? 'Progres belajar telah direset.' : 'Progres direset untuk sesi ini, tetapi penyimpanan browser sedang dibatasi.');
}

function startQuiz() {
  quizIndex = 0;
  selectedAnswers = [];
  quizLocked = false;
  showQuestion();
  $('quizRoot').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function showQuestion() {
  quizLocked = false;
  const question = questions[quizIndex];
  const pct = Math.round(((quizIndex + 1) / questions.length) * 100);
  $('quizRoot').innerHTML = `
    <div class="quiz-status"><span>Pertanyaan ${quizIndex + 1} dari ${questions.length}</span><span>${pct}% sesi</span></div>
    <div class="quiz-progress" role="progressbar" aria-label="Progres kuis" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>
    <h3 class="quiz-question">${escapeHTML(question.q)}</h3>
    <div class="quiz-answers">${question.a.map((answer, index) => `<button class="answer-option" type="button" data-choice="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(answer)}</span></button>`).join('')}</div>
    <div id="answerFeedback" aria-live="polite"></div>
    <div class="quiz-actions"><button class="btn btn-ghost" id="quitQuiz" type="button">Keluar kuis</button><button class="btn btn-primary" id="nextQuestion" type="button" disabled>${quizIndex === questions.length - 1 ? 'Lihat Hasil →' : 'Pertanyaan Berikutnya →'}</button></div>`;
}
function chooseAnswer(choice) {
  if (quizLocked || !Number.isInteger(choice) || choice < 0 || choice >= questions[quizIndex].a.length) return;
  quizLocked = true;
  selectedAnswers[quizIndex] = choice;
  const question = questions[quizIndex];
  $('quizRoot').querySelectorAll('[data-choice]').forEach((button) => {
    const index = Number(button.dataset.choice);
    button.disabled = true;
    if (index === question.correct) button.classList.add('correct');
    else if (index === choice) button.classList.add('wrong');
  });
  const isCorrect = choice === question.correct;
  $('answerFeedback').innerHTML = `<div class="quiz-explanation"><strong>${isCorrect ? '✓ Jawaban benar!' : '✕ Jawaban belum tepat.'}</strong>${escapeHTML(question.why)}</div>`;
  $('nextQuestion').disabled = false;
  $('nextQuestion').focus();
}
function showResult() {
  const score = selectedAnswers.reduce((sum, choice, index) => sum + (choice === questions[index].correct ? 1 : 0), 0);
  const percent = Math.round((score / questions.length) * 100);
  const history = safeRead(storageKeys.quiz, { attempts: 0, best: 0, last: 0 });
  const safeHistory = { attempts: (Number(history.attempts) || 0) + 1, best: Math.max(Number(history.best) || 0, percent), last: percent };
  safeStore(storageKeys.quiz, safeHistory);
  $('quizRoot').innerHTML = `
    <div class="quiz-result"><div class="score-circle"><strong>${percent}</strong><small>SKOR / 100</small></div>
    <span class="section-kicker">SESSION COMPLETED</span>
    <h3>${percent >= 80 ? 'Luar biasa!' : percent >= 60 ? 'Bagus, terus belajar!' : 'Yuk, pelajari lagi!'}</h3>
    <p>Kamu menjawab benar <strong>${score} dari ${questions.length}</strong> soal.</p>
    <div class="quiz-history"><strong>Statistik kuis</strong> · Percobaan: ${safeHistory.attempts} · Skor terbaik: ${safeHistory.best}/100</div>
    <div class="quiz-review">${questions.map((question, index) => `<article class="review-item"><strong>${index + 1}. <span class="${selectedAnswers[index] === question.correct ? 'review-good' : 'review-bad'}">${selectedAnswers[index] === question.correct ? '✓ Benar' : '✕ Belum tepat'}</span> — ${escapeHTML(question.q)}</strong><p>Jawabanmu: ${escapeHTML(question.a[selectedAnswers[index]])}</p><p>Jawaban benar: ${escapeHTML(question.a[question.correct])}</p><p>${escapeHTML(question.why)}</p></article>`).join('')}</div>
    <button class="btn btn-primary" id="retryQuiz" type="button">↻ Ulangi Kuis</button>
    </div>`;
  $('quizHistory').hidden = false;
  $('quizHistory').innerHTML = `<strong>Riwayat tersimpan di perangkat ini:</strong> ${safeHistory.attempts} percobaan · skor terakhir ${percent}/100 · skor terbaik ${safeHistory.best}/100.`;
}
function quitQuiz() {
  const confirmed = window.confirm('Keluar dari kuis? Jawaban pada sesi ini tidak akan dinilai.');
  if (!confirmed) return;
  $('quizRoot').innerHTML = `<div class="quiz-welcome"><div class="quiz-start-icon" aria-hidden="true">?</div><span class="section-kicker">READY WHEN YOU ARE</span><h3>Kuis belum selesai</h3><p>Kamu bisa memulai kembali saat siap. Jawaban pada sesi sebelumnya tidak disimpan.</p><button class="btn btn-primary" id="startQuiz" type="button">Mulai Kuis <span aria-hidden="true">→</span></button></div>`;
}
function renderQuizHistory() {
  const history = safeRead(storageKeys.quiz, null);
  if (!history || !Number(history.attempts)) return;
  $('quizHistory').hidden = false;
  $('quizHistory').innerHTML = `<strong>Riwayat di perangkat ini:</strong> ${Number(history.attempts)} percobaan · skor terakhir ${Number(history.last) || 0}/100 · skor terbaik ${Number(history.best) || 0}/100.`;
}

function setTheme(theme) {
  const light = theme === 'light';
  document.body.classList.toggle('light', light);
  $('themeIcon').textContent = light ? '☀' : '☾';
  $('themeToggle').setAttribute('aria-label', light ? 'Aktifkan mode gelap' : 'Aktifkan mode terang');
  $('themeToggle').title = light ? 'Aktifkan mode gelap' : 'Aktifkan mode terang';
  safeStore(storageKeys.theme, light ? 'light' : 'dark');
}
function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  $('readingProgress').style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
  $('backToTop').classList.toggle('show', window.scrollY > 450);
}
function setupActiveNavigation() {
  const links = [...document.querySelectorAll('.desktop-nav .nav-link')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.25] });
  sections.forEach((section) => observer.observe(section));
}

// Event listeners: event delegation keeps the module grid and quiz interactive after re-rendering.
$('moduleGrid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-open]');
  if (button) openModule(Number(button.dataset.open));
});
$('searchInput').addEventListener('input', renderModules);
document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));
$('clearSearch').addEventListener('click', () => { $('searchInput').value = ''; setFilter('all'); $('searchInput').focus(); });
$('closeDialog').addEventListener('click', () => $('lessonDialog').close());
$('lessonDialog').addEventListener('click', (event) => { if (event.target === $('lessonDialog')) $('lessonDialog').close(); });
$('lessonDialog').addEventListener('close', () => { if ($('moduleGrid').querySelector(`[data-open="${activeModule}"]`)) $('moduleGrid').querySelector(`[data-open="${activeModule}"]`).focus(); });
$('completeModule').addEventListener('click', toggleComplete);
$('prevModule').addEventListener('click', () => openModule(activeModule - 1));
$('nextModule').addEventListener('click', () => openModule(activeModule + 1));
$('resetProgress').addEventListener('click', resetProgress);
$('quizRoot').addEventListener('click', (event) => {
  const answer = event.target.closest('[data-choice]');
  if (answer) { chooseAnswer(Number(answer.dataset.choice)); return; }
  if (event.target.closest('#startQuiz') || event.target.closest('#retryQuiz')) { startQuiz(); return; }
  if (event.target.closest('#nextQuestion') && quizLocked) {
    quizIndex += 1;
    if (quizIndex >= questions.length) showResult(); else showQuestion();
    return;
  }
  if (event.target.closest('#quitQuiz')) quitQuiz();
});
$('themeToggle').addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));
$('menuToggle').addEventListener('click', () => {
  const nav = $('mobileNav');
  nav.hidden = !nav.hidden;
  $('menuToggle').setAttribute('aria-expanded', String(!nav.hidden));
  $('menuToggle').setAttribute('aria-label', nav.hidden ? 'Buka menu' : 'Tutup menu');
  $('menuToggle').querySelector('span').textContent = nav.hidden ? '☰' : '✕';
});
$('mobileNav').addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  $('mobileNav').hidden = true;
  $('menuToggle').setAttribute('aria-expanded', 'false');
  $('menuToggle').setAttribute('aria-label', 'Buka menu');
  $('menuToggle').querySelector('span').textContent = '☰';
});
$('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !$('mobileNav').hidden) {
    $('mobileNav').hidden = true;
    $('menuToggle').setAttribute('aria-expanded', 'false');
    $('menuToggle').setAttribute('aria-label', 'Buka menu');
    $('menuToggle').querySelector('span').textContent = '☰';
  }
});

const savedTheme = safeRead(storageKeys.theme, 'dark');
setTheme(savedTheme === 'light' ? 'light' : 'dark');
$('year').textContent = String(new Date().getFullYear());
renderModules();
renderQuizHistory();
updateScroll();
setupActiveNavigation();
