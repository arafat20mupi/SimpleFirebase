import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Provider";

const LogIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then( result =>{
             console.log(result.user)
        })
        .catch( error => {
             console.log(error)
         })
    }
    return (
        <div className="flex item-center justify-center p-6  ">
            <div className="flex flex-col max-w-md   rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Log in</h1>
                </div>
                <form onSubmit={handleLogin} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" required placeholder="Enter your passward" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" required name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Log in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                            <Link to={'/signup'} className="hover:underline dark:text-violet-600"> Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;