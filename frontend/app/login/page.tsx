

const LoginPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-96 p-5 rounded-lg shadow-xl border border-gray-200">

                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-semibold">Login</h2>
                    <p className="text-gray-600 text-sm">Enter your details to continue</p>
                </div>

                <form className="space-y-6 mt-5">
                    <div className="space-y-1">
                        <label className="block text-sm" htmlFor="Email">Email</label>
                        <input type="email" id="Email" className="w-full text-sm p-2 rounded-xl text-gray-900 outline-none border border-gray-300" placeholder="example@gmail.com" required />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm" htmlFor="Password">Password</label>
                        <input type="password" id="Password" className="w-full text-sm p-2 rounded-xl text-gray-900 outline-none border border-gray-300" placeholder="Enter your password" required />
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center justify-center gap-1">
                            <input type="checkbox" />
                            <label htmlFor="Remember" className="text-sm text-gray-700">Remember me</label>
                        </div>
                        <div>
                            <a href="#" className="text-sm text-blue-500">Forgot password?</a>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-orange-600 text-white font-semibold text-sm py-2 rounded-xl hover:bg-orange-700 cursor-pointer duration-100">
                        Login
                    </button>

                </form>

            </div>
        </div>
    )
}

export default LoginPage