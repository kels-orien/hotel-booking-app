export async function getHotel(req, slugId) {
    const hotel = await req.db.collection('hotels').findOne({
      slug: slugId,
    });
    if (!hotel) return null;
    const {
        _id,
        name,
        address,
        slug,
        faq,
        city,
        rooms,
        ratings,
        hotel_description,
        hotel_information,
        terms_and_conditions,
        images,
        thumb_url
    } = hotel;
    
    return {
        _id,
        name,
        address,
        slug,
        faq,
        city,
        rooms,
        ratings,
        hotel_description,
        hotel_information,
        terms_and_conditions,
        images,
        thumb_url
    };
  }
  

  export async function getRoom(req, roomId) {
    const room = await req.db.collection('rooms').findOne({
      _id: roomId,
    });
    if (!room) return null;
    const {
        _id,
        amount,
    } = room;
    
    return {
        _id,
        amount
    };
  }
  
  export async function postCost(req, costAmount) {
      const cost =  await req.db.collection('cost').insertOne({
          amount:costAmount

      })
      if (!cost) return null;
        const {
          _id,
          amount
        } = cost ;

        return {
          _id,
          amount
        }
  }

  export async function getCity(req, city_name) {
 
    const hotels = await req.db.collection('hotels').find({
      city: city_name,
    }).toArray();
    if (!hotels) return null;
    return hotels;
  }