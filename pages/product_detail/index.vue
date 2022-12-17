<template>
    <div>
        <VmProductsList />
    </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';

export default {
    name: 'index_products',
    components: {
        VmProductsList
    }
};
</script>
