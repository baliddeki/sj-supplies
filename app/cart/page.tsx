import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"

const cartItems = [
  { name: "Notebook", price: 15, quantity: 2, total: 30 },
  { name: "Pens", price: 5, quantity: 5, total: 25 },
  { name: "Paper", price: 10, quantity: 1, total: 10 },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 font-medium text-gray-900">
                  <div>Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-center">Total</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0"></div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="text-center text-gray-600">${item.price}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="font-medium text-gray-900">${item.total}</span>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-gray-900">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-semibold text-gray-900">${total}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-4">Coming soon</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Proceed to Checkout</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
