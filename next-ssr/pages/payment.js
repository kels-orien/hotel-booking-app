import PaymentForm from "../components/PaymentForm";
import Nav from "../components/Nav"
import Layout from "../components/layout";
import PageBody from "../components/pagebody";
import Footer from "../components/footer"
import Spinner from "../components/spinner";
import Overlay from "../components/overlay"
function Payment() {
   
    return (
        <Layout>
            <Overlay/>
            <Spinner/>
            <Nav/>
            <PageBody>
            <PaymentForm />
            </PageBody>
            <Footer/>
        </Layout>
    )
}



export default Payment