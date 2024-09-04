import './Component.css'

function Footer() {
    return(
        <>
        <footer className=' footer flex justify-center items-center'>
            <p className=' md:text-lg font-medium text-gray-700'>Copyright ©{new Date().getFullYear()} All rights reserved</p>
        </footer>
        </>
    )
}

export default Footer