import PaymentScreen from "@/components/payment"
import ReactLenis from "lenis/react"

const Payment = () => {
    return (
        <ReactLenis root>
            <main>
                <PaymentScreen />
            </main>
        </ReactLenis>

    )
}

export default Payment