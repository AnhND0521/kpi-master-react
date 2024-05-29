import Header from "./Header";
import Navbar from "./Navbar"

const Wrapper = (props) => {
    return (
        <div className='w-full'>
            <Header />
            <Navbar tab={props.tab} />
            <main className='flex flex-col items-start gap-6 p-4 ms-72 me-20 mt-24 mb-6 w-4/5'>
                {props.children}
            </main>
        </div>
    );
}

export default Wrapper;