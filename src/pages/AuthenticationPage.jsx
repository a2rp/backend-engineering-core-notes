import React from "react";
import Authentication from "../topics/authentication";
import Jwt from "../topics/authentication/jwt";
import Cookies from "../topics/authentication/cookies";
import OAuth from "../topics/authentication/oauth";

const AuthenticationPage = () => <><Authentication /><Jwt /><Cookies /><OAuth /></>;
export default AuthenticationPage;
