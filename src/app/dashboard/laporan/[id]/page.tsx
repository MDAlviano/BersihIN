

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false, // atau true jika ada laporan tambahan
  };
}

function LaporanDetail({ laporan }: { laporan: { title: string; content: string } }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold mb-4">{laporan.title}</h1>
      <p>{laporan.content}</p>
    </div>
  );
}

export default LaporanDetail;
