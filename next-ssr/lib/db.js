export async function getHotel(req, hid) {
    const hotel = await req.db.collection('hotels').findOne({
      _id: hid,
    });
    if (!hotel) return null;
    const {
        _id,
        name,
        address,
        faq,
        city,
        rooms,
        ratings,
        hotel_description,
        hotel_information,
        terms_and_conditions,
        images,
        thumb_url,
    } = hotel;
    
    return {
        _id,
        name,
        address,
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
  