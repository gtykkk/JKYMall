'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 클릭 시 서버단에서 db와 비교 후 로그인 처리
  const login = () => {
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     id: id,
    //     password: password
    //   })
    // }).then((res) => {
    //   if (res.status === 200) {
    //     router.push('/');
    //   }
    // }).catch((err) => {
    //   console.log(err);
    // });
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <div className="bg-gray-600 w-96 p-6 rounded shadow-sm">
          {/* 로고 넣을 자리 */}
          <div className="flex items-center justify-center mb-4">
            <img src="../favicon.ico" alt="이미지" width={30} height={30} />
          </div>
          {/* 틀린 아이디 입력 시 */}
          <div className="bg-red-500 py-2 px-1">
            <p>올바르지 않은 아이디나 패스워드 입니다.</p>
          </div>
          {/* <h1 className="text-lg">Login</h1> */}
          <div>
            <label className="" htmlFor="id">
              아이디
            </label>
          </div>
          <div>
            <input className="w-full py-2 px-1 outline-none mb-4 text-black" id="id" type="text" value={id} placeholder="아이디를 입력해주세요." onChange={(e) => { setId(e.target.value) }} />
          </div>
          <div>
            <label htmlFor="password">
              패스워드
            </label>
          </div>
          <div>
            <input className="w-full py-2 px-1 outline-none mb-4 text-black" id="password" type="password" value={password} placeholder="비밀번호를 입력해주세요." onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div>
            <button type="button" className="bg-blue-600 w-full py-2 rounded hover:bg-blue-600 transition-colors" onClick={login}>
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn