import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import Link from 'next/link';

export default function Signup() {
    return (
        <div className="container-fluid bg-white">
            <div className="row py-5">
                <div className="col-4 mx-auto py-5">
                    <h3 className="d-flex justify-content-center">Create An Account</h3>
                    <form action="" className="form-wrapper p-4">
                        <CustomInput placeholder="Username" />
                        <CustomInput placeholder="Email Address" className="mt-3" />
                        <CustomInput className="mt-3" placeholder="Password" />
                        <CustomButton title="Sign up" type="primary" className="w-100 d-block my-3" />
                        <div>
                            <Link href="/login" className="text-dark text-decoration-none text-center">
                                Do you already have an Account? <b>Login</b>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
