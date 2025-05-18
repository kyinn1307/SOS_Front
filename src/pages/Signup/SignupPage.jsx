import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useEffect } from "react";

export const SignupPage = () => {
  const userId = useState("");
  const [username, setUsername] = useState(""); // ✅ 수정 (userName -> username)
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // 기본값은 USER
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      setErrorMessage("이름과 비밀번호를 모두 입력해 주세요.");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/signup", {
        username,
        password,
        role,
      });

      console.log("회원가입 성공:", response.data);
      setSuccessMessage("회원가입에 성공했습니다!");
      setErrorMessage("");
    } catch (error) {
      console.error("회원가입 실패:", error);
      setErrorMessage("회원가입에 실패했습니다. 다시 시도해 주세요.");
      setSuccessMessage("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginTop: "50px",
      }}
    >
      <h2>테스트용 회원가입</h2>

      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: "310px", padding: "8px" }}
      >
        {/* value를 무조건 대문자로 맞춤 */}
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <button
        onClick={handleSignup}
        style={{
          width: "150px",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        회원가입
      </button>

      {successMessage && (
        <div style={{ color: "green", marginTop: "10px" }}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
      )}
    </div>
  );
};

export default SignupPage;
