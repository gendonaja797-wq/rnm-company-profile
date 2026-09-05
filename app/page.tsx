const services = [
  {
    number: "01",
    title: "Konstruksi Gedung",
    copy: "Pelaksanaan konstruksi untuk fasilitas pendidikan, perkantoran, komersial, industri, dan bangunan publik.",
  },
  {
    number: "02",
    title: "Infrastruktur Sipil",
    copy: "Pekerjaan jalan, drainase, dinding penahan tanah, serta prasarana kawasan yang fungsional dan terukur.",
  },
  {
    number: "03",
    title: "Sistem Air & Utilitas",
    copy: "Pengembangan jaringan perpipaan, SPAM, irigasi, dan infrastruktur pengolahan air untuk kebutuhan masyarakat.",
  },
  {
    number: "04",
    title: "Supplier & Perdagangan",
    copy: "Pengadaan material konstruksi, peralatan, dan kebutuhan umum dengan koordinasi pengiriman yang responsif.",
  },
];

const standards = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001"];

const standardDetails = [
  { code: "ISO 9001", year: "2015", title: "Manajemen Mutu" },
  { code: "ISO 14001", year: "2015", title: "Manajemen Lingkungan" },
  { code: "ISO 45001", year: "2018", title: "Keselamatan & Kesehatan Kerja" },
  { code: "ISO 37001", year: "2016", title: "Sistem Manajemen Anti-Penyuapan" },
];

const projects = [
  {
    image: "images/project-kebumen.webp",
    title: "Pusat Informasi Geologi Geopark Kebumen",
    place: "Kebumen, Jawa Tengah",
    year: "2024",
    type: "Ruang informasi publik",
  },
  {
    image: "images/project-bandung.webp",
    title: "Information Center Pusat Survei Geologi",
    place: "Bandung, Jawa Barat",
    year: "2024",
    type: "Interior edukasi",
  },
  {
    image: "images/project-ijen.webp",
    title: "Pusat Informasi Geologi Geopark Ijen",
    place: "Banyuwangi, Jawa Timur",
    year: "2023",
    type: "Fasilitas publik",
  },
  {
    image: "images/project-sunan-giri.webp",
    title: "Pembangunan Atap Makam Sunan Giri",
    place: "Gresik, Jawa Timur",
    year: "2025",
    type: "Struktur bangunan",
  },
  {
    image: "images/project-stadium.webp",
    title: "Prasarana Stadion Gelora Joko Samudro",
    place: "Gresik, Jawa Timur",
    year: "2024",
    type: "Jalur pedestrian",
  },
  {
    image: "images/project-belahanrejo.webp",
    title: "Tanggul Penahan Tanah TPST Belahanrejo",
    place: "Gresik, Jawa Timur",
    year: "2024",
    type: "Infrastruktur sipil",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="PT Ratu Nayla Mandiri - Beranda">
          <img src="images/rnm-logo.webp" alt="Logo PT Ratu Nayla Mandiri" />
          <span>
            <strong>RATU NAYLA</strong>
            <small>MANDIRI</small>
          </span>
        </a>

        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <a className="header-cta" href="mailto:pt.ratunaylamandiri313@gmail.com">
          Hubungi kami <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Kontraktor · Supplier · Perdagangan Umum
          </div>
          <h1>
            Membangun dengan presisi.
            <em>Bertumbuh dengan integritas.</em>
          </h1>
          <p>
            PT Ratu Nayla Mandiri menghadirkan solusi konstruksi dan pengadaan untuk
            fasilitas publik, infrastruktur sipil, serta ruang yang memberi dampak nyata.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#layanan">
              Jelajahi kapabilitas <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#proyek">
              Lihat proyek pilihan
            </a>
          </div>
          <div className="standard-row" aria-label="Standar manajemen tersertifikasi">
            <span className="standard-label">Standar manajemen</span>
            {standards.map((standard) => (
              <span className="standard-pill" key={standard}>{standard}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Dokumentasi proyek PT Ratu Nayla Mandiri">
          <div className="image-card image-card-main">
            <img
              src="images/hero-structure.webp"
              alt="Pekerjaan struktur atap baja di kompleks Makam Sunan Giri"
            />
            <span className="image-tag">Konstruksi gedung · 2025</span>
          </div>
          <div className="image-card image-card-path">
            <img
              src="images/hero-path.webp"
              alt="Jalur pedestrian Stadion Gelora Joko Samudro"
            />
          </div>
          <div className="image-card image-card-exhibit">
            <img
              src="images/hero-exhibit.webp"
              alt="Interior Pusat Informasi Geologi Geopark Kebumen"
            />
          </div>
          <div className="location-chip">
            <span className="pulse" />
            Gresik, Jawa Timur
          </div>
        </div>
      </section>

      <section className="proof-bar" aria-label="Ringkasan pengalaman perusahaan">
        <div className="proof-intro">
          <span className="proof-mark">RNM</span>
          <p>Pengalaman terverifikasi dalam dokumen perusahaan</p>
        </div>
        <div className="proof-item">
          <strong>27</strong>
          <span>rekam proyek</span>
        </div>
        <div className="proof-item">
          <strong>2019–2025</strong>
          <span>rentang pengalaman</span>
        </div>
        <div className="proof-item">
          <strong>4</strong>
          <span>standar ISO</span>
        </div>
      </section>

      <section className="about section-shell" id="tentang">
        <div className="about-index" aria-hidden="true">01</div>
        <div className="about-copy">
          <span className="section-kicker">Tentang RNM</span>
          <h2>Solusi lapangan yang dikerjakan dengan disiplin.</h2>
          <p className="about-lead">
            Berbasis di Gresik, PT Ratu Nayla Mandiri bergerak pada jasa konstruksi,
            pengadaan, dan perdagangan umum untuk kebutuhan pemerintah, fasilitas
            publik, serta mitra usaha.
          </p>
          <p>
            Pengalaman perusahaan mencakup pekerjaan gedung, jalan, perpipaan,
            drainase, ruang informasi, dan prasarana kawasan di berbagai wilayah
            Indonesia. Setiap pekerjaan diarahkan pada mutu hasil, keselamatan kerja,
            dan koordinasi yang dapat dipertanggungjawabkan.
          </p>
        </div>
        <div className="about-values">
          <article>
            <span>01</span>
            <div><strong>Mutu terjaga</strong><p>Kontrol pelaksanaan dan hasil yang konsisten.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><strong>Keselamatan utama</strong><p>Budaya kerja yang mengutamakan K3.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><strong>Integritas kerja</strong><p>Transparansi dalam koordinasi dan komitmen.</p></div>
          </article>
        </div>
      </section>

      <section className="services section-shell" id="layanan">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Kapabilitas utama</span>
            <h2>Satu mitra untuk pekerjaan yang kompleks.</h2>
          </div>
          <p>
            Dari perencanaan pelaksanaan hingga serah terima, kami menyatukan koordinasi
            lapangan, mutu, keselamatan, dan ketepatan waktu dalam satu alur kerja.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standards-section section-shell" id="standar">
        <div className="standards-copy">
          <span className="section-kicker light">Sistem manajemen</span>
          <h2>Standar yang menjaga kualitas setiap proses.</h2>
          <p>
            Empat sertifikasi yang tercantum dalam company profile memperkuat pendekatan
            RNM terhadap mutu, lingkungan, keselamatan kerja, dan integritas bisnis.
          </p>
        </div>
        <div className="standards-grid">
          {standardDetails.map((standard) => (
            <article key={standard.code}>
              <span className="standard-code">{standard.code}</span>
              <strong>{standard.year}</strong>
              <p>{standard.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-shell" id="proyek">
        <div className="portfolio-heading">
          <div>
            <span className="section-kicker">Proyek pilihan</span>
            <h2>Jejak pekerjaan yang terlihat.</h2>
          </div>
          <p>
            Dokumentasi berikut merupakan bagian dari pengalaman perusahaan yang
            tercantum dalam company profile RNM.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
              <img src={project.image} alt={`Dokumentasi ${project.title}`} />
              <div className="project-overlay">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.place} · {project.year}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="coverage-row">
          <span>Area pengalaman</span>
          <p>Gresik</p><i />
          <p>Mojokerto</p><i />
          <p>Bandung</p><i />
          <p>Kebumen</p><i />
          <p>Banyuwangi</p><i />
          <p>Lampung</p>
        </div>
      </section>

      <section className="project-tease section-shell" id="kontak">
        <div>
          <span>Mulai percakapan</span>
          <p>Punya kebutuhan konstruksi atau pengadaan?</p>
        </div>
        <a href="mailto:pt.ratunaylamandiri313@gmail.com">
          Diskusikan dengan RNM <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="images/rnm-logo.webp" alt="" />
          <div><strong>PT Ratu Nayla Mandiri</strong><span>Kontraktor · Supplier · Perdagangan Umum</span></div>
        </div>
        <div className="footer-contact">
          <span>Dahanrejo, Kebomas, Gresik, Jawa Timur</span>
          <a href="mailto:pt.ratunaylamandiri313@gmail.com">pt.ratunaylamandiri313@gmail.com</a>
        </div>
        <span className="copyright">© 2026 RNM</span>
      </footer>
    </main>
  );
}
