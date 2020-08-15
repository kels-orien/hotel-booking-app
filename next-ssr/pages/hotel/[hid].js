

const Hotel  = ({hotel}) => {
  
  return <p>Hotel Info: {hotel}</p>
}



// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get hotels
    const res = await fetch('https://.../hotels')
    const hotels = await res.json()


    //get data from state management instead

    // Get the paths we want to pre-render based on hotels
    const paths = hotels.map((hotel) => `/hotel/${hotel.id}`)
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    // params contains the hotel `id`.
    // If the route is like /hotel/1, then params.id is 1
    const res = await fetch(`https://.../hotel/${params.id}`)
    const hotel = await res.json()
  
    // Pass hotel data to the page via props
    return { props: { hotel } }
  }
export default Hotel