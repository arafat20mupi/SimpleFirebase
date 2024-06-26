import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Provider";


const SignUp = () => {
    const { createUser} = useContext(AuthContext)
    const [error, setError,setUser] = useState()

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }
        if(!/[@#$%^&*!]/.test(password)) {
            setError("Password add a spicial cherecter like (@,#,$,%,^,&,*,!)")
            return
        }

        setError('')
        console.log(email, password, name, confirmPassword);
        createUser(email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(err => {
                setError(err.message.split("/")[1])
            })
    }
    return (
        <div className="flex item-center justify-center p-6  ">
            <div className="flex flex-col item-center justify-center max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                </div>
                <form onSubmit={handleSignup} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name" required placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" required placeholder="Enter your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Password</label>
                            <input type="password" required name="password" placeholder="Enter your passward" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Confirm Password</label>
                            <input type="password" name="confirmPassword" required placeholder="Enter Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        {
                            error &&<p className="text-red-500 text-lg">{error}</p>
                        }
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account yet?
                            <Link to={'/login'} className="hover:underline dark:text-violet-600"> Log in</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;