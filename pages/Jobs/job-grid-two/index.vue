<template>
    <div class="bg-[white]">
        <div class="flex flex-col">
            <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 400px; width: 100%"></div>

            <div class="absolute top-0  w-full flex justify-center z-10 mt-[8rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>
            <h2 class="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold z-20">Job
                Vacancies</h2>

            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center ">
            <BaseDataTable :data="products">
              <ColumnBase header="title" field="title"></ColumnBase>
              <ColumnBase header="price" field="price"></ColumnBase>
              <ColumnBase header="category" field="category"></ColumnBase>
              <ColumnBase header="description" field="description"></ColumnBase>
              <ColumnBase header="brand" field="brand"></ColumnBase>
            </BaseDataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseDataTable from '../../../components/common/DatatableBase.vue'
import ColumnBase from '../../../components/common/ColumnBase.vue'

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Tiêu đề' },
    { key: 'brand', label: 'Thương Hiệu' },
    { key: 'price', label: 'Giá' },
    { key: 'description', label: 'Mô tả' },
    { key: 'category', label: 'Danh mục' },
     { key: 'actions', label: 'Thao tác' }
]

const products = ref<Record<string, any>[]>([])

onMounted(async () => {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const json = await res.json()
        products.value = json.products.map((item: any) => ({
            id: item.id,
            title: item.title,
            brand: item.brand,
            price: item.price,
            description: item.description,
            category: item.category
        }))
    } catch (error) {
        console.error('Lỗi khi gọi API:', error)
    }
})

const editRow = (row: any) => {
  console.log('🖊️ Sửa:', row)
  alert(`Sửa sản phẩm: ${row.title}`)
}

const deleteRow = (id: number) => {
  const confirmDelete = confirm('Bạn có chắc chắn muốn xoá?')
  if (!confirmDelete) return
  products.value = products.value.filter(product => product.id !== id)
}
</script>

<style></style>