import "../../styles/animateSVG.css";

export default function AnimateSVG() {
    return (
        <div className="animateSVG fixed inset-0 z-50 flex items-center justify-center bg-primary-50 transition-transform duration-700 ease-in-out">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 100"
                className="w-4/5 max-w-lg"
            >
                <path
                    d="M50 50 C100 0, 200 0, 250 50 S400 100, 450 50"
                    className="path"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}