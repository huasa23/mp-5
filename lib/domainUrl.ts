"use server"
export async function getDomainUrl() {
    console.log("process.env.DOMAIN", process.env.DOMAIN);
    return process.env.DOMAIN;
}