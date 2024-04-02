import { useForm } from "react-hook-form";
import { User } from "../../interfaces/User";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
const userSchema = Joi.object({
    username: Joi.string().required().min(6).max(50).messages({
        "string.empty": "Username không được để trống",
        "string.min": "Username có độ dài tối thiểu {#limit} ký tự",
        "string.max": "Username có độ dài tối đa {#limit} ký tự",
    }),
    password: Joi.string().required().min(6).max(50).messages({
        "string.empty": "Password không được để trống",
        "string.min": "Password có độ dài tối thiểu {#limit} ký tự",
        "string.max": "Password có độ dài tối đa {#limit} ký tự",
    }),
    email: Joi.string().required().email({ tlds: false }).messages({
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng",
    }),
    fullname: Joi.string().allow(null, "")
});

const Register = () => {
    // Khai báo useNavigate()
    const nav = useNavigate();
    // Khai báo useForm()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({
        resolver: joiResolver(userSchema),
    });
    // Xử lý submit
    const onSubmit = (user: User) => {
        // console.log(user);
        (async () => {
            try {
                const res = await fetch('http://localhost:3001/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const data = await res.json();
                if (data?.id) {
                    window.alert("Bạn đã đăng ký thành công");
                    nav('/login');
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input type="text" placeholder="Username"
                        {...register('username')}
                    />
                    {errors.username && (<span>{errors.username.message}</span>)}
                </p>
                <p>
                    <input type="text" placeholder="Fullname"
                        {...register('fullname')}
                    />
                </p>
                <p>
                    <input type="text" placeholder="Email"
                        {...register('email')}
                    />
                    {errors.email && (<span>{errors.email.message}</span>)}
                </p>
                <p>
                    <input type="password" placeholder="Password"
                        {...register('password')}
                    />
                    {errors.password && (<span>{errors.password.message}</span>)}
                </p>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}
export default Register;