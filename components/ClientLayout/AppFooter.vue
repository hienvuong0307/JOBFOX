<script setup></script>

<template>
    <div class="layout-footer bg-gray-800 text-white py-8 p-9">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-4">
                <div class="flex justify-center mt-5">
                    <img
                        class="mb-20 ml-3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAASCAYAAACQCxruAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRUVBNUYxQjc3QjMxMUVFQjQxOEFCMTlCMjczMEI4NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVBNUYxQTc3QjMxMUVFQjQxOEFCMTlCMjczMEI4NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkQ3REQyQjA0NzdFRTExQTVGMEMyMDEwMUFBRDE2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvWekK8AAASmSURBVHja7Fk9aBRREN6IP/gDXqFBsMhaCKKFG7VTMBELCyEbEBVE7gKCiIinKBhQL4mIoIURxHYvhRY2uRRaKHIbUQRBc/YSTy0Ef8gJoqDiOcvNhnGceW/3LoEIDnzksu9n33sz882b2batQ18dRdYDtgHWARYAXgIeA54B6rzzo3OLnf8y92S+8GwToB+wC7CMtX0HPARcBtyf5bV14d8qYq5LBuDh7wqgNhcWNY/9fyRyRsAeQbmRLATsBNwDXEr5rgJ6fh1/S5IDTGCfMuIVYAoQAFxlXN2AV8pYup68Mm+Z9OlSlFoga4zXPIXPCtiHisfWp+3pKtsDF5fNMyW86w8FHwbcACTl2jOAKzNo/WVUhKe0x8rPpZzbJWM9w2F6Kef1cM4BRUkutvH3Vhgj+cr89Pk1S3t8Rr5G0RuUSag8ACzCuBzLKUAIuNOigsvCIZTIQfm4gQwaQY20cymyA8yTsZFH9SrjRgGdCanVxTVTjynhumPl+6xvJ1lXibBGFjAsGI/L5uaSFZ714P7/UvBZVJ5JDgJWAZ6z5xcAd6WLVwrqpso9IWx4EBUQ9wvQsCRljGBbLC9wrKPQLFVaYDAAKgFRbg3HhMIdYpQZZjdZY54ps6ooryLcQVyFcWJHqFGKbkfN22SJQt+RZW5uwXsp5Q4Iyo0vWt1k4RkDtdlCgUl8Qzymh0sNRVKug896mcJdorSKgW59ZrAm7y2ZKD9S8MYUcVeTHU2O41RkChM1Rj+aUWaRFQoYWwML1aWNxz7zrtDQNzQockRRGD+TosUpxti+eriC1wgTfAS8TUG7q1u4XNHDsMW/sQTemEMmGCDxl1J9EkUEhvmXpzSYUoKxVKncO2sJ4vOIQNPTCv4lLOoYYAvgJzOGX4Y05V+QwNDWRw7TQ0+eTakq3u0rBu0YDIDH6RxV2qRSAHkP+ID/f8PfS5XFvpmBDXsz1CeK1W0E3UxxWppVwQsePSRvltfMaTrJ7dlnRtKFqEhGMA9vmV8Ea475PLLk3XhIhwwpVDMSsouTLcc9brFu7R30oDoMfYusb8YSJnxDoYKmeNqai8wQCinpOU+KK77UL1LwJ8Bt4dJ03WnUn08CngCGAPuFTTxBI0mSO9pilOmCEySw7mZvz9y4q4Z2ToejyvwZkp5JlOwI+XwaeraJT/Pgi4C9rDx5FLAP8A6wEnNgSfotB+shE1DvfM3yXlrIKGOqNI6H4qHndrF0qpqQErezg7MZY5zXTliMoMwqWoOs0FFgBtlnuDj6loxBSynHBQPI0QJKrOBJLFXeZANWIDQ5L7yEH3ZZ8IAi20w3qQxlcPEmGh20pDlJ6dqxxOOrhnn6yKXNTXCBCw0MFhhYTbwdY0pZEwwjR2ma1qJvAQ44jaK1TX44jVr0hZQxt0iqOfxA1yhWSymu1+AJNq8cTlilimXYkuMWschjy4M7LfuSyq5jShnSFJ+l8JFtE74HrwWcxgnbWdtnp/GZMPrI8JQ2KN+Dm/mElkE63kjeGQrxi5cFbRct6U7gkkOutLD+uLrVQUJQ6CT/zOkyOg8VNswQYzeFqOkyalu9/q+ksP+lGfktwABTE0kOBYgpEQAAAABJRU5ErkJggg=="
                        alt=""
                    />
                    
                </div>
                <div class="flex space-x-4">
                    <a href="/contact" class="text-base hover:underline">How it works</a>
                    <a href="/privacy" class="text-base hover:underline">Create a job</a>
                    <a href="/terms" class="text-base hover:underline">About us</a>
                    <a href="/terms" class="text-base hover:underline">Plans</a>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                    <a href="#" class="text-sm hover:underline">Facebook</a>
                    <a href="#" class="text-sm hover:underline">Twitter</a>
                    <a href="#" class="text-sm hover:underline">LinkedIn</a>
                </div>
                <div class="flex space-x-4">
                    <a href="#" class="text-sm hover:underline">FAQ</a>
                    <a href="#" class="text-sm hover:underline">Support</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-footer {
    background-color: #202942;
    color: #ffffff;
    padding: 2rem 0;
    width: 100%;
    height: 17rem;
}
</style>
