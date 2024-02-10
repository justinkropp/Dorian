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
      fontFamily: {
        pitch: ['Pitch'],
        pitchsans: ['PitchSans'],
      },
      extend: {
        fontFamily: {
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
  