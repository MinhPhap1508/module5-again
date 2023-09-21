import { useParams } from "react-router"
import { getById } from "../service/BlogService";
import { useEffect, useState } from "react";

export function Detail() {
    const param = useParams();
    const [detail, setDetail] = useState({});
    const getBlogDetail = async () => {
        await getById(param.id)
    }
    useEffect(() => {
        getBlogDetail()
    }, [param])
    return (
        <div>
            <div className="container">
  <div className="row">
    <div className="col-lg-8">
      <article>
        <h2>Post Title</h2>
        <p>
          {}
        </p>
        <img src="image.jpg" alt="Blog Post Image" className="img-fluid" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet magna nec velit venenatis tincidunt. Nunc euismod, orci eu
          tristique efficitur, urna ipsum scelerisque felis, vitae volutpat
          sapien mauris vitae sem. Sed ut ligula pretium, ornare arcu ac, porta
          eros. Nullam et massa id dolor sollicitudin rutrum. Ut ac ipsum sit
          amet eros iaculis tempor. Sed sed dui lacinia, lobortis mi ac,
          eleifend mauris. Nullam sit amet lacinia mauris. Vestibulum vitae
          pharetra lacus.
        </p>
        <p>
          Integer non augue auctor, interdum neque vel, consequat mi. Morbi eu
          interdum elit. Sed nec risus non lacus pulvinar mattis id in arcu.
          Nullam aliquet mauris id risus ornare, nec auctor tortor fermentum. Ut
          sit amet porttitor dolor, nec porta lacus. Donec placerat nunc nec
          ullamcorper congue. Nulla facilisi. Quisque in mauris vel urna iaculis
          consequat. Curabitur tristique interdum sem, non hendrerit nisi
          fringilla nec. Praesent id suscipit nisi.
        </p>
        <p>
          Proin tincidunt vestibulum rutrum. In hac habitasse platea dictumst.
         
        </p>
      </article>
    </div>
    <div className="col-lg-4">
      <aside>
        <h3>About Me</h3>
        <img
          src="author.jpg"
          alt="Author Image"
          className="img-fluid rounded-circle"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,
          nunc ac volutpat interdum, orci ligula pretium magna, in tristique
          urna turpis ac nunc.
        </p>
      </aside>
    </div>
  </div>
</div>

        </div>
    )
}