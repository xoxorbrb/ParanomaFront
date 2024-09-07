module.exports = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/login/login",
        permanent: true,
      },
    ];
  },
};
