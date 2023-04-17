import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function hasAuth(Component) {
  return function HasAuth(props) {
    const isAuthenticated = useSelector((state) => state.token);

    const router = useRouter();

    if (isAuthenticated) {
      router.push("/panel/socials");
    }

    return <Component {...props} />;
  };
}
