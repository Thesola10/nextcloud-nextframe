<template>
    <tr>
        <td>
            <table class="inline">
                <tr>
                    <td>{{ t('nextframe', 'Name') }}</td>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>{{ t('nextframe', 'Allowed ancestors') }}</td>
                    <td>
                        <table>
                            <tr v-for="ancestor in ancestorUris" :key="ancestor.id">
                                <td>{{ ancestor.ancestor_uri }}</td>
                                <td class="action-column">
                                    <span><a class="icon-delete has-tooltip" :title="t('nextframe', 'Delete')" @click="$emit('deleteancestor', ancestor.id)"/></span>
                                </td>
                            </tr>
                        </table>
                        <form @submit.prevent="addAncestor">
                            <input v-model="addAncestorUri"
                                type="url"
                                name="ancestorUri"
                                :placeholder="t('nextframe', 'Allowed Ancestor URI')">
                            <input type="submit" class="button" :value="t('nextframe', 'Add')">
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>{{ t('nextframe', 'Client Token') }}</td>
                    <td><code>{{ clientId }}</code></td>
                </tr>
            </table>
        </td>
        <td class="action-column">
            <span><a class="icon-delete has-tooltip" :title="t('nextframe', 'Delete')" @click="$emit('delete', id)" /></span>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'NextframeItem',
    components: {},
    props: {
        client: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            id: this.client.id,
            name: this.client.name,
            clientId: this.client.clientId,
            ancestorUris: this.client.ancestorUri,
            addAncestorUri: '',
        }
    },
    computed: {},
    methods: {
        addAncestor() {
            this.$emit('addancestor', this.id, this.addAncestorUri)
            this.addAncestorUri = ''
        }
    }
}
</script>

<style scoped>
	.icon-toggle,
	.icon-delete {
		display: inline-block;
		width: 16px;
		height: 16px;
		padding: 10px;
		vertical-align: middle;
	}

	td code {
		display: inline-block;
		vertical-align: middle;
	}

	table.inline td {
		border: none;
		padding: 5px;
	}
</style>
