export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV-y2bh4LQX0UoXAbtGSc00FZasOIN9uVB7VDXIaGXw6qk4IwNM-IUjzGudWpS8rlQ3Slc6Wi1_oJb777a7q4XJk54BjVmk.png?r=fea";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
