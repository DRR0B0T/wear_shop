import nextId from "react-id-generator";

export const addToCart = (data,
                          colors,
                          sizes,
                          capacity,
                          ports,
                          touchId,
                          selectedColor,
                          selectedSize,
                          selectedCapacity,
                          selectedPort,
                          selectedTouchId,
                          currency,
                          price,
                          cart,
                          setCart) => {

  const htmlId = nextId()
  if (data?.product.inStock) {
    const object = {
      id: htmlId,
      name: data?.product.name,
      image: data?.product.gallery,
      brand: data?.product.brand,
      inStock: data?.product.inStock,
      prices: data?.product.prices,
      counter: 1,
      totalCount: price,
      colors,
      sizes,
      capacity,
      ports,
      touchId,
      selectedColor,
      selectedSize,
      selectedCapacity,
      selectedPort,
      selectedTouchId,
      currency,
      price,
    }

    if (object.ports.length > 0
      || object.touchId.length > 0
      || object.colors.length > 0
      || object.sizes.length > 0
      || object.capacity.length > 0) {

      const objSize = cart.find(product => product.selectedSize === object.selectedSize)
      const objColor = cart.find(product => product.selectedColor === object.selectedColor)
      const objCapacity = cart.find(product => product.selectedCapacity === object.selectedCapacity)
      const objPort = cart.find(product => product.selectedPort === object.selectedPort)
      const objTouchId = cart.find(product => product.selectedTouchId === object.selectedTouchId)

      if (isEqual(objSize, object)
        && isEqual(objColor, object)
        && isEqual(objCapacity, object)
        && isEqual(objPort, object)
        && isEqual(objTouchId, object)
      ) {
        setCart((cart) => {
          return cart.map((product) => {
            if (object.selectedSize === product.selectedSize
              && object.selectedCapacity === product.selectedCapacity
              && object.selectedColor === product.selectedColor
              && object.selectedPort === product.selectedPort
              && object.selectedTouchId === product.selectedTouchId
            ) {
              return {
                ...product,
                counter: product.counter + 1,
                totalCount: Math.trunc(((product.counter + 1) * product.price) * 100) / 100,
              }
            }
            return product
          })
        })
      } else {
        setCart((cart) => [...cart, object])
      }


      function isEqual(object1, object2) {
        if (object1 === undefined || object2 === undefined) return false
        const props1 = Object.getOwnPropertyNames(object1).shift()
        const props2 = Object.getOwnPropertyNames(object2).shift()

        if (JSON.stringify(object1) === JSON.stringify(object2)) return false

        if (props1.length !== props2.length) {
          return false
        }

        for (let i = 0; i < props1.length; i += 1) {
          const prop = props1[i]
          const bothAreObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object'

          if ((!bothAreObjects && (object1[prop] !== object2[prop])) ||
            (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
            return false
          }
        }

        return true
      }
    }
  }

}

