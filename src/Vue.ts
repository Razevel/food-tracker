import { Vue } from 'vue-property-decorator';

export default class<TProps = {}, TData = {}> extends Vue {
    get Props(): TProps {
        return <TProps>this.$props;
    }
    
    get Data(): TData {
        return <TData>this.$data;
    }
}
