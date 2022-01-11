module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        spacing: {
            '14': '3.5rem',
            '125px': '125px',  
            'spc-header': '32rem'  
        },
        colors: {
            'hoverspt': '#18D760',
            'purple-main': '#2D46B9',
            'green-main': '#1ED760'
        },
        backgroundImage: theme => ({
            'spotify-theme': "url('/src/img/bursts.svg')",
            'spotify-theme-mobile': "url('/src/img/bursts-mobile.svg')"
        }),
        backgroundSize: {
            '175%' : '125%',
            '195%' : '195%'
        },
        backgroundPosition: {
            'banner': '300% 10%',
            'banner-mobile': 'top 25% center'
        },
        fontSize: {
            '9xl': '9rem'
        }
    },
  },
  plugins: [],
}
