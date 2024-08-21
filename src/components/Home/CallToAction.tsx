import CTAForm from "../common/CTAForm";

const CallToAction: React.FC = () => {
    return (
        <div
            className="w-full min-h-screen flex items-center justify-center py-10 px-4"
            style={{
                backgroundImage: `url('/cta.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="bg-white rounded-2xl max-w-[40rem] max-h-[70rem] lg:max-h-[64rem] w-full lg:w-3/4 ml-auto p-6 md:p-10 shadow-custom-light">
                <div className="text-center flex flex-col gap-4">
                    <h1 className="text-2xl font-extrabold text-[#ff3c00] md:text-3xl">"Let’s Revive"</h1>
                    <h2 className="text-xl font-bold md:text-2xl">OUR MEET UP GROUP</h2>
                    <p className="text-lg text-[#1da7fe] md:text-xl">Revival of Ancient Values, Respect, Care and Relationships.</p>
                    <ul className="text-justify mt-4">
                        <li className="mb-2">In this modern age, it's easy to lose sight of the values that once guided our interactions and relationships.</li>
                        <li className="mb-2">But embracing core values is crucial for fostering a harmonious society and establishing deeper connections with others.</li>
                        <li className="mb-2">Engage in real life, Encourage creativity and instigate change!</li>
                    </ul>
                    <h2 className="mt-4 text-xl font-bold md:text-2xl">JOIN US</h2>
                </div>
                <CTAForm />
            </div>
        </div>
    );
};

export default CallToAction;
