tailwind.config = {
    theme: {
        extend: {
             fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
         montserrat: ['Montserrat', 'sans-serif'],
      },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            boxShadow:{
                black: '3px 3px 0 #000',
                white: '3px 3px 0 #fff'
            }
        }

    },
    darkMode: 'selector'
      
}