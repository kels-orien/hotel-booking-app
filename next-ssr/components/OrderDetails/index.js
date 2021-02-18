import React from 'react'

const OrderDetails = ({type, price}) => {
    return (
        <div>
            <div>
          {type}
          <div>{price}</div>
        </div>
        </div>
    )
}

export default OrderDetails
