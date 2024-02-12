module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      extend: {
        fontFamily: {
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
  