import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <Wrapper tab={4}>
            <div className="flex flex-col gap-6 items-start w-3/4">
                <div className='flex gap-4 items-center'>
                    <BackButton to='/settings'/>
                    <Breadcrumbs>
                        <Link to="/settings" className="opacity-60">
                            Cài đặt
                        </Link>
                        <Link to="#">
                            Quyền riêng tư
                        </Link>
                    </Breadcrumbs>
                </div>
                <PageHeader label={'Chính sách bảo mật'} />
                <Typography variant="h5" className="font-inter">I. Giới thiệu</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Fusce dolor nulla, auctor eget malesuada eu, fringilla sit amet diam. Cras in turpis in risus ultrices faucibus. Aliquam in lorem ut ligula tempor volutpat. Proin ipsum velit, tempus id nunc non, condimentum facilisis tortor. Duis metus turpis, ultricies id laoreet et, consequat vel lacus. Quisque accumsan ultrices ligula eget posuere. Nunc vel efficitur mi. Integer massa ex, consectetur vel augue in, lacinia sagittis augue. Curabitur venenatis quis odio sit amet gravida.</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Nullam a velit erat. Nunc iaculis quis nisl interdum laoreet. Phasellus posuere laoreet dui a dignissim. Sed efficitur, nisl in bibendum vehicula, libero magna semper mi, blandit scelerisque massa dui ac ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at mattis justo, molestie molestie velit. Nulla ante neque, convallis gravida condimentum vel, blandit venenatis augue. Integer consequat ex nec eleifend consectetur.</Typography>
            
                <Typography variant="h5" className="font-inter">II. Thu thập và sử dụng thông tin</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Integer rhoncus non dolor vel volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec porta pharetra suscipit. Mauris id justo sit amet quam cursus tempus vel at dui. Aenean faucibus elit non enim suscipit, quis elementum diam interdum. Vivamus finibus est lacus, id aliquam tellus bibendum sit amet. Vivamus venenatis mollis felis at posuere. Fusce vestibulum magna vitae dapibus rutrum. Aenean viverra dolor turpis, quis hendrerit metus pharetra quis. Morbi facilisis semper lacinia. Nam vitae lobortis mi. Quisque consectetur, nibh sed venenatis elementum, erat sem lobortis arcu, lacinia tempor ante diam quis tortor. Mauris feugiat felis lectus, in tempus mi lobortis non.</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Nam ut felis at velit luctus dignissim. Cras quis ultricies nisi, nec rhoncus lectus. Aliquam vitae tellus lobortis, tristique leo eu, porttitor velit. Fusce commodo leo nec odio congue porta. Nullam lacinia metus magna, in tincidunt augue pulvinar sed. Nunc vel eros mollis, hendrerit ligula fermentum, ultricies ligula. Mauris leo neque, pharetra ac mi vitae, posuere tincidunt neque. Proin euismod sed ipsum ac vestibulum. Integer lobortis condimentum pulvinar. Sed tortor nisl, varius a nisl sed, pretium tincidunt risus. Maecenas porta aliquet nulla, sed pellentesque ex cursus non. Duis in aliquet ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Sed a neque libero. Vestibulum consectetur aliquam eleifend. Suspendisse hendrerit enim auctor ex pulvinar porttitor. In hac habitasse platea dictumst. Fusce dignissim ullamcorper arcu sagittis pellentesque. Nulla sit amet suscipit lorem. Donec dolor velit, imperdiet ut interdum eget, posuere vel sem. Aliquam et auctor neque, sed fringilla diam. Sed nec interdum elit, at dignissim diam. Suspendisse tincidunt ornare nunc, at mattis mi varius quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus non augue non felis volutpat mollis non id est. Nulla non faucibus lacus. Suspendisse nec justo vel ligula tempor euismod. Nulla nec malesuada libero, in hendrerit nisi. Quisque non placerat enim.</Typography>

                <Typography variant="h5" className="font-inter">III. Bảo mật thông tin của bạn</Typography>
                <Typography variant="paragraph" className="font-inter text-sm text-left">Nunc tempor dui nec consectetur lacinia. Sed aliquet sem erat, id ornare tortor ornare aliquet. Vestibulum tincidunt, lectus in convallis sollicitudin, metus tellus pharetra tortor, id facilisis est augue sed enim. Curabitur consectetur blandit nulla, sit amet aliquet nibh commodo ac. Etiam ut tristique ex. Praesent scelerisque luctus neque, a sagittis velit dapibus eget. Quisque sagittis condimentum justo nec pulvinar. Nunc aliquam dolor turpis, a euismod mi vehicula eu. Integer luctus magna eget urna tempus tristique. Nullam vitae scelerisque nibh. Fusce eget ultricies augue, vel sollicitudin felis. Donec urna ipsum, mattis sit amet aliquet ac, volutpat quis mi. Ut id ligula at nunc mattis elementum non ac dui.</Typography>                <Typography variant="paragraph" className="font-inter text-sm text-left">Quisque tincidunt velit a vestibulum pharetra. Suspendisse at consequat nibh, in blandit erat. Ut facilisis risus dolor, quis laoreet tellus volutpat vitae. Maecenas gravida leo rhoncus nibh scelerisque, id consectetur mi finibus. Quisque finibus sapien in viverra dapibus. Nunc vulputate enim vel justo finibus ultrices. Phasellus varius est in ullamcorper accumsan. Aenean et dui nisi. Etiam vehicula, nulla non dapibus fringilla, eros libero viverra neque, vel blandit justo sem at lacus. Nulla neque metus, fringilla non dui tempor, egestas egestas odio. Nunc gravida ante ut dui pellentesque, non elementum erat convallis. Donec commodo elit mollis, faucibus nibh vitae, dapibus purus. Sed aliquam magna nulla, vitae luctus elit imperdiet fermentum. Nulla facilisi. In nulla odio, scelerisque vel diam eu, pharetra cursus dui.</Typography>

            </div>
        </Wrapper>
    );
}

export default PrivacyPolicy;