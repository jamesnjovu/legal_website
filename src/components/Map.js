
const Map = () => {
    return (
        <div id="#location" className="bg-warm-gray-50">
            <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">Get In Touch</h2>
                        <p className="mt-4 text-lg text-warm-gray-500">
                            Thank you for visiting The Law Offices of Chalwe & Kabalata site. We intend to provide general information, which should not be construed as legal advice at all. If you are looking for advice on a specific matter, you are encouraged to contact us directly. We strongly advise you to not disclose personal or confidential information until an attorney-client relationship has been established.
                        </p>
                    </div>
                    <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.246269054141!2d28.305869615435064!3d-15.417253989286609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408caec64a0859%3A0x934dfd8c7707c57!2sMillenium%20Village!5e0!3m2!1sen!2szm!4v1673353109254!5m2!1sen!2szm"
                            className="h-96 rounded-2xl"
                            style={{ border: 0, width: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;
