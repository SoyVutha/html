import React from 'react'

const fetchtesting = () => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '2rem' }}>
            <h2>{product.name}</h2>
            <p><strong>Brand:</strong> {product.brand || 'N/A'}</p>
            <p><strong>Category ID:</strong> {product.category_id}</p>
            <p><strong>Description:</strong> {product.description}</p>            
            <p><strong>Old Price:</strong> ${product.Old_Price || 'N/A'}</p>
            <p><strong>Stock Quantity:</strong> {product.stock_quantity}</p>
            {product.image_url && (
              <img src={product.image_url} alt={product.name} width={150} />
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default fetchtesting