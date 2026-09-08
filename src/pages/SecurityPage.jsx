import React from "react";
import Security from "../topics/security";
import Xss from "../topics/security/xss";
import Csrf from "../topics/security/csrf";
import RateLimiting from "../topics/rateLimiting";
import Hashing from "../topics/hashing";

const SecurityPage = () => <><Security /><Xss /><Csrf /><RateLimiting /><Hashing /></>;
export default SecurityPage;
