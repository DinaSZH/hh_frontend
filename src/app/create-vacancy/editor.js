import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({description, setDescription}) {

    return <CKEditor
    editor={ ClassicEditor }
    data={description}
    onReady={ editor => {
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
    } }
    config={ {
        toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'redo' ]
    } }
    onChange={ ( event, editor ) => {
        const data = editor.getData();
        setDescription(data)
    } }
    onBlur={ ( event, editor ) => {
        console.log( 'Blur.', editor );
    } }
    onFocus={ ( event, editor ) => {
        console.log( 'Focus.', editor );
    } }
/>

}