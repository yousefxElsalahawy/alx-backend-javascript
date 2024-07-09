export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]).then((res) => res)
}
//     setTimeout(resolve, 100, ukSuccess);
//      resolve >> function , 100 >> wait time , ukSuccess >> value given to func resolve
