module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/flask_app/:path*",
        destination: "http://localhost:5000/:path*",

      },
    ];
  };
  return {
    rewrites,
  };
};
