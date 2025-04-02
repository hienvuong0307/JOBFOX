<template>
    <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>

        <div class="absolute inset-0"></div>

        <div class="absolute mr-[55rem]">
            <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[355px] h-auto bg-white">
                <div class="flex justify-center ml-0 ">
                    <img :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAASCAYAAACQCxruAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNkM1NUY0Mzc3QjMxMUVFODY2OEQyN0JBMDNCODg0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNkM1NUY0Mjc3QjMxMUVFODY2OEQyN0JBMDNCODg0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkQ3REQyQjA0NzdFRTExQTVGMEMyMDEwMUFBRDE2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrnsFeAAAASxSURBVHja7FlNaBNREN6IP/gD5mCK4KHbgyB66Fa9KZiIBw9CtyAqiCQFQUTEKAoW1PQHEfTQCuJ104MevDQ96EGRbEUpCNp4lzbqQfCHRhAFlcZZOlvGcd57u0kLLXTgo+m+n33vzcw3b2YTe/p/WArZDtgL2AZYBXgLeAF4Bajzzs+vrrWWZfHJSuHZTkAP4CBgA2v7BXgGuAl4Ypo8lUo1s7Y0/q0iFrskAQ7+rgBqi2FRK9j/pwNnBBwWlBvIasABwGPAjZjvKqDn1/G3JDnABPYpI6YA0wAPYCvG1TWYUoyl68kr5i2TPmmFUgtkjeGap/FZAftQcdj6VHsaZHvgYrN5poV3/aPgU4C7gKhcexlwax6tv4yKcBTtofJzMee2yVhHc5hOzHkdnLNXoSQb2/h7K4yRXMX89PltQ3t4Rq6KoncoJqHyFLAG43IoFwE+4GGTCi4Lh1AiB+XiBpJoBDXSzqXIDjBPxgYe1aUYNwLoiEitNq6ZekwJ1x0q32V9O8i6SoQ1soAhwXhsNjeXrPCsE/f/n4KvoPJ0cgKwGfCaPR8APJIuXjGomyr3vLDhPlRA2M9Dw5KUMYxtobzBsZaCZqnSPI0BUPGIcms4xhfuECPMMDNkjXmmzKpCeRXhDmIrGCd0hBql6BbUvEnWKeg7sMxdTXgvpdxeQbnhRStDFp7UUJspFOjE1cRjerjUUCTlWvisiyncJkqraOjWZQar896SjvIDBbfHiLsq2d/gOE5FujBRY/SjMsosskIBY6tnoLq48dhl3uVr+voaRQ4rFMbPpGhwilG2r06u4DZhgi+ADzFod0sTlyt6GKb4NxrBG3PIBL0k/lKqj6IITzP/xpgGU4owliqVe2ctQnweFmh6TsEzwqLOAnYD/jBjmNGkKUtBPE1bNzlMBz15IaWq8G5XYdCWxgB4nM5RpU0qCiCfAJ/x/5/4e71ise/nYcPOPPUJYnWCIMMUp0qzKnjBo4fkLPCaOU1HuT27zEjSiIpkBCvwlvldsOaQzwNLPoSHdFKTQjUiPrs4mXLccwbrVr2DHlSrpm+R9U0awoSrKVTQFE+15iIzhEJMes6T4oor9QsU/BXwQLg03bFm688XAOOAfsAxYRPjaCRRckdTjNJdcLwI1t3o7Zkbd1XTzulwRDF/kqRnEiVbQj4fh55N4tI8+DrgCCtPngEcBXwEpDAHlqTHcLAOMgH1zncs76WFjDKmSmN4KA56bpqlU9WIlLiPHZzJGMO8dsJgBGVW0epjhY4CM8huzcXRNWQMqpRyTDCAHC2ghAqexFLlPTZgE0Il14SX8MMuCx5QZJvJkMpQEhevo9E+Q5oTla4tQzwe1MzTTS5tdoQLnK9hME/DauLtGFPKmmAYOUrTtBZ9H3Dcmi1am+S3NVuLHogZc4ukmsMPtE1htZTiujSeYPLKoYhVqlCGDDluEYs8pjy4w7Avqew6qihD6uKzFD6yCeF78FbAJZywhbV9s2Y/EwYfGV7SBul7cCqVauQTWhLpuJ280xfiFy8Lmi5a0p3AJodc0YQY0/rD6lYrCUG+Ff0zp83o3FewYZIYuy5EzZVRE/X6Uklhl6UR+SvAAO5USYx+wYKuAAAAAElFTkSuQmCC'"
                        alt="" class="h-5" />
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2rem">
                    <span style="font-weight: 600; font-size: 1.2rem">RESET YOUR PASSWORD</span>
                </div>
                <div class="flex justify-start mt-4">
                    <span class="text-[1.2rem] font-light text-[#94a3b8]">Please enter your email address. You will
                        receive a link to create a new password via email.</span>
                </div>
                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                    <span style="font-weight: 600; font-size: 1.2rem">Your Email</span>
                    <InputText name="username" type="text" placeholder="example@website.com"
                        style="padding-left: 10px;width: 315px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>

                <div
                    style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem">
                    <Button label="SEND" class="!h-12 text-white mr-2 text-[12px] w-[315px] font-bold"
                        style="box-shadow: 0 3px 5px 0 #3b82f61a; width: 315px; background-color: #3b82f6 !important; border: 1px solid #3b82f6 " />
                </div>
                <div class="flex justify-center mt-4">
                    <span class="text-[1rem] text-[#94a3b8]">Remember your password ?</span>
                    <span class="ml-2 font-semibold cursor-pointer">
                        <nuxt-link to="/auth/signup" class="text-blue-500 font-medium hover:underline ml-2">
                            Sign Up
                        </nuxt-link>
                    </span>
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script>
</script>

<style></style>