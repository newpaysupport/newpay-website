import { useEffect } from "react";

// Toast Component
const Toast = ({ message, type, isVisible, onClose } : any) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500); 

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div
            className={`fixed top-6 right-6 z-[9999] transform transition-all duration-500 ease-in-out ${
                isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
            }`}
        >
            <div
                className={`
                     w-[400px] shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5
                    ${type === 'success' 
                        ? 'bg-green-50 border-l-4 border-green-400' 
                        : 'bg-red-50 border-l-4 border-red-400'
                    }
                `}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            {type === 'success' ? (
                                <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            )}
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className={`text-sm font-medium ${
                                type === 'success' ? 'text-green-900' : 'text-red-900'
                            }`}>
                                {type === 'success' ? 'Success!' : 'Error!'}
                            </p>
                            <p className={`mt-1 text-sm ${
                                type === 'success' ? 'text-green-700' : 'text-red-700'
                            }`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={onClose}
                        className={`
                            w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium
                            ${type === 'success' 
                                ? 'text-green-600 hover:text-green-500 focus:text-green-500' 
                                : 'text-red-600 hover:text-red-500 focus:text-red-500'
                            }
                            focus:outline-none focus:ring-2 focus:ring-indigo-500
                        `}
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Toast;