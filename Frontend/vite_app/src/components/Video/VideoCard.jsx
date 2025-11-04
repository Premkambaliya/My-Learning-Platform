function VideoCard({ title, url }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <iframe
        width="100%"
        height="200"
        src={url}
        title={title}
        allowFullScreen
        className="rounded"
      ></iframe>
    </div>
  );
}

export default VideoCard;