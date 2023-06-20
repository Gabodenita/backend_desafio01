class ProductManager{
    constructor(){
        this.product=[]
    }
    addProduct({title, description, price, thumbnail, code, stock}){   
        const id= this.product.length+1
        const producto = this.product.find(e => e.code === code)
            if (producto){
                return console.log("el codigo es invalido")
            }
            if (!producto){
                this.product.push({
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                })
            }
    } 
      
    getProduct() { 
        return this.product
    }

    getProductById(productId) {
        const producto = this.product.find(e => e.id === productId)
        if (!producto){
            return console.log("el id es invalido")
        }
        if (producto){
            console.log(producto)
        }
    }
    
}

const p =new ProductManager()
p.addProduct({ title: 'auto', description: "cuatro puertas", price: "100", thumbnail: false, code: "ABC1", stock: 20})
p.addProduct({ title: 'auto', description: "2 puertas", price: "10", thumbnail: false, code: "ABC2", stock: 10})
p.addProduct({ title: 'auto', description: "3 puertas", price: "500", thumbnail: false, code: "ABC1", stock: 5})
p.addProduct({ title: 'moto', description: "0 puertas", price: "500", thumbnail: false, code: "ABC3", stock: 5})
p.addProduct({ title: 'camioneta', description: "3 puertas", price: "500", thumbnail: false, code: "ABC4", stock: 5})


console.log(p.getProduct())
console.log(p.getProductById(3))